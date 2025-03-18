import { createClient } from '@sanity/client';

const config = {
    projectId: 'c2axa0nm',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-03-17',
}

const sanityClient = createClient(config);

export default sanityClient