import { Octokit } from '@octokit/rest';
import { GithubRepo, ProjectRepo } from '../types/index';
import logger from '../utils/logger';
import config from '../config/index';
import { Cache } from '../../../shared/types';
import { AppError } from '../middlewares/error.middleware';

const CACHE_TTL = 24 * 60 * 60 * 1000; //24 hr in ms

//------------------------------------------------------
// Service for fetching and processing Github data
//------------------------------------------------------
export class GitHubService {
    private octokit: Octokit;
    private cache: Cache<ProjectRepo[]> | null = null;

    constructor() {
        this.octokit = new Octokit({
            auth: config.github.token //Use token from config for auth, required for private repos
        });
    }

    private transform(repo: GithubRepo): ProjectRepo {
        return {
            id: repo.id,
            name: repo.name,
            description: repo.description ?? 'No description provided',
            repoUrl: repo.html_url,
            liveUrl: repo.homepage ?? null,
            topics: repo.topics ?? [],
            language: repo.language ?? null
        }
    }

    async getRepos(): Promise<ProjectRepo[]> {
        if (this.cache && Date.now() - this.cache.timestamp < CACHE_TTL) {
            logger.debug('Returning cached Github repos');
            return this.cache.data;
        }

        try {
            const { data } = await this.octokit.repos.listForUser({
                username: config.github.username,
                sort: 'pushed', // Priotize recently updated repos'
                direction: 'desc',
                per_page: 100, // Max per page to limit API calls
                type: 'owner' // Only repos owned by the me
            });

            const repos = (data as GithubRepo[])
            .filter(repo => !repo.fork)         // Exclude forked repos
            .map(repo => this.transform(repo)); // Transform to frontend-friendly shape

            this.cache = { data: repos, timestamp: Date.now() }; // Cache the frontend ready data
            logger.info(`Fetched ${repos.length} repos from Github API for user ${config.github.username}`);

            return repos;
        } catch (err){
            logger.error('Failed to fetch Github repos', err);
            throw new AppError('Failed to fetch Github repose', 502);
        }
    }
    
    invalidateCache(): void {
        this.cache = null;
        logger.info('Github repo cache invalidated');
    }
}