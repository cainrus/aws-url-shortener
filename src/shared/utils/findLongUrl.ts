
import {listURLS} from '@/graphql';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(awsExports);
const client = generateClient();

export const findLongUrl = async ({short}: {short: string}) => {
    try {
        const {
            data,
        } = await client.graphql({query: listURLS, variables: {
            filter: {
                short: {
                    eq: short
                }
            },
        }});
        return data.listURLS.items[0]?.long;
    } catch (error) {
        console.error('Error creating URL:', error);
    }
};
