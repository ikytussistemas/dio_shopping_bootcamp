declare namespace NodeJS {
  export interface ProcessEnv {
    DB_NAME?: string,
    DB_USER?: string,
    DB_PASS?: string,
    SECRET_KEY?: string
  }
}
