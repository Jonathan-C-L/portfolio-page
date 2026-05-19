//------------------------------------------------------
// Server side TypeScript types
//------------------------------------------------------
export interface ApiResponseBody<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

// Raw shape of data returned from Github API
export interface GithubRepo {
  id: number,
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  private: boolean;
  pushed_at: string;
  created_at: string;
}

// Cleaned shape for use by frontend
export interface ProjectRepo {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string | null;
  topics: string[];
  language: string | null;
}