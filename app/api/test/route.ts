const handler = async (request: Request) => {
    throw new Error('This is a test error')
};

export const POST = handler;
