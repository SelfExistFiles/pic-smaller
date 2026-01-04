// Global type declarations for the project

// Add missing ImportMeta properties
interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: (pattern: string) => Record<string, () => Promise<any>>;
}

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
}

// Declare SCSS module types
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Declare worker modules
declare module "*?worker" {
  const workerConstructor: new () => Worker;
  export default workerConstructor;
}

// Declare WASM modules
declare module "*.wasm" {
  const content: any;
  export default content;
}

// Add declarations for experimental FileSystem APIs
declare global {
  // Extend the global scope with missing API types
  interface DataTransferItem {
    getAsFileSystemHandle?: () => Promise<FileSystemHandle | null>;
  }

  interface FileSystemDirectoryHandle {
    entries?: () => AsyncIterableIterator<[string, FileSystemHandle]>;
    values?: () => AsyncIterableIterator<FileSystemHandle>;
    keys?: () => AsyncIterableIterator<string>;
  }

  interface Window {
    showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle>;
  }
  
  // Type for FileSystemHandle (simplified)
  type FileSystemHandle = FileSystemFileHandle | FileSystemDirectoryHandle;

  interface FileSystemFileHandle {
    readonly kind: "file";
    readonly name: string;
    getFile(): Promise<File>;
  }

  interface FileSystemDirectoryHandle {
    readonly kind: "directory";
    readonly name: string;
    entries(): AsyncIterableIterator<[string, FileSystemHandle]>;
    values(): AsyncIterableIterator<FileSystemHandle>;
    keys(): AsyncIterableIterator<string>;
    getDirectoryHandle(name: string, options?: { create?: boolean }): Promise<FileSystemDirectoryHandle>;
    getFileHandle(name: string, options?: { create?: boolean }): Promise<FileSystemFileHandle>;
    removeEntry(name: string, options?: { recursive?: boolean }): Promise<void>;
  }
}

export {};