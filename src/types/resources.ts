export interface Resource {
  _id: string;
  title: string;
  fileName: string;
  image: string;
  grade: number;
  category: string;
  tags: string[];
  fileUrl: string;
  fileType: string;
  fileSize: number;
  createdAt: string;
  updatedAt: string;
}

export interface ResourcesResponse {
  resources: Resource[];
  totalPages: number;
  currentPage: number;
  total: number;
}