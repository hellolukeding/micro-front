
export interface getWorkSpacePromiseResult {
  [key: string]: {
    location: string,
    workspaceDependencies: string[],
    mismatchedWorkspaceDependencies: string[]
  }
}

export interface DividedWorkSpace {
  [key: string]: getWorkSpacePromiseResult[]
}