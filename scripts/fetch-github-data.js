// GitHub Data Fetcher
// This script fetches your GitHub profile and repository data
// Run with: node scripts/fetch-github-data.js

import { writeFileSync } from 'fs';
import { join } from 'path';

const username = 'willyd61';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGitHubData() {
  try {
    console.log('🔍 Fetching GitHub data for', username);
    
    // Fetch user profile
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: GITHUB_TOKEN ? {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      } : {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`);
    }
    
    const user = await userResponse.json();
    
    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: GITHUB_TOKEN ? {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      } : {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }
    
    const repos = await reposResponse.json();
    
    // Filter and format featured repositories
    const featuredRepos = repos
      .filter(repo => {
        return !repo.fork && 
               repo.description &&
               (repo.topics?.includes('portfolio-project') || 
                repo.topics?.includes('featured') ||
                repo.name === 'Installing-Nautobot-on-RHEL-A-Complete-Walk-Through');
      })
      .slice(0, 6)
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        updated: repo.updated_at,
        created: repo.created_at
      }));
    
    // Calculate contribution stats
    const contributionStats = {
      totalRepos: repos.filter(r => !r.fork).length,
      totalStars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
      totalForks: repos.reduce((sum, r) => sum + r.forks_count, 0),
      languages: [...new Set(repos.filter(r => r.language).map(r => r.language))]
    };
    
    // Compile data
    const data = {
      updated: new Date().toISOString(),
      user: {
        name: user.name,
        bio: user.bio,
        location: user.location,
        company: user.company,
        blog: user.blog,
        twitter: user.twitter_username,
        avatar_url: user.avatar_url,
        followers: user.followers,
        following: user.following,
        public_repos: user.public_repos
      },
      featuredRepos,
      stats: contributionStats
    };
    
    // Write to data file
    const dataPath = join(process.cwd(), 'src', 'data', 'github-repos.json');
    writeFileSync(dataPath, JSON.stringify(data, null, 2));
    
    console.log('✅ GitHub data updated successfully');
    console.log(`   - Featured repos: ${featuredRepos.length}`);
    console.log(`   - Total stars: ${contributionStats.totalStars}`);
    console.log(`   - Total public repos: ${contributionStats.totalRepos}`);
    
  } catch (error) {
    console.error('❌ Error fetching GitHub data:', error.message);
    
    // Create placeholder data if fetch fails
    const placeholderData = {
      updated: new Date().toISOString(),
      user: {
        name: 'William Lipford',
        bio: 'Site Reliability Engineer',
        location: 'Carolina Beach, NC',
        public_repos: 0
      },
      featuredRepos: [],
      stats: {
        totalRepos: 0,
        totalStars: 0,
        totalForks: 0,
        languages: []
      }
    };
    
    const dataPath = join(process.cwd(), 'src', 'data', 'github-repos.json');
    writeFileSync(dataPath, JSON.stringify(placeholderData, null, 2));
    console.log('📝 Created placeholder data file');
  }
}

fetchGitHubData();
