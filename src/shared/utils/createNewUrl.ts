
import {createURL} from '@/graphql/mutations';
import { Amplify } from 'aws-amplify';
import {customAlphabet, urlAlphabet} from 'nanoid';
import awsExports from '../../aws-exports';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(awsExports);
const client = generateClient();

export const createNewURL = async ({long}: {long: string}) => {
    try {
        const short = customAlphabet(urlAlphabet, 5)();
        const data = await client.graphql({query: createURL, variables: { input: { short, long } }})
        console.log('Created URL:', data.data?.createURL);
        return data;
    } catch (error) {
        console.error('Error creating URL:', error);
    }
};
