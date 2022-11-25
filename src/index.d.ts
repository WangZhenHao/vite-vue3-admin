declare namespace tools {
  function setLocalStorage(key: string, value: any, expires?: number): void;
  function clearLocalStorage(key?: string): void;
  function getLocalStorage(key: string): any;
}
