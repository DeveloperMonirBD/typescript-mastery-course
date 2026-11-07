//* Type assertion

//* "as" syntax
type Status = 'pending' | 'approved' | 'rejected';

// const someStatus: Status = 'pending' as const;
const someStatus: string = 'pending';

const showStatus = (status: Status) => {
    console.log('Your current application status is' + status);
};

// showStatus('pending' as const);
// showStatus(someStatus);
showStatus(someStatus as Status);

//* non-null assertion
interface Config { 
    port?: number;
}
const config: Config = {
    port: 3000
};

const currentPort: number = config.port!;
// const currentPort1: number = config.port as number;

//* constant assertion

const configuration = {
    port: 8000,
    prefix: "/api/v1"
} as const;

