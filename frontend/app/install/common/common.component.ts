export class ParentComponent {
    latestReleaseVersion: string;
    constructor() {
        this.latestReleaseVersion = 'v3.1.0-rc.1';
    }
    getLatestReleaseVersion() {
        return this.latestReleaseVersion;
    }
}