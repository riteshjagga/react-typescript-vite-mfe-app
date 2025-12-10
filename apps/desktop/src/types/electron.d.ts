export interface IElectronAPI {
  platform: string
  send: (channel: string, data: any) => void
  receive: (channel: string, func: (...args: any[]) => void) => void
  getAppVersion: () => Promise<string>
}

declare global {
  interface Window {
    electron: IElectronAPI
  }
}
