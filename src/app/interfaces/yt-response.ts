export interface YtResponse {
  items: YtItem[];
  nextPageToken: string;
  pageInfo: YtPageInfo;
}

export interface YtItem {
  id: string;
  snippet: YtSnippet;
}

interface YtSnippet {
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: {
    maxres: {
      url: string;
    }
  };
}

interface YtPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
