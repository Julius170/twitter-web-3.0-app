export const tweetSchema = {

    name:'tweets',
    title: 'Tweets',
    type: 'document',
    field: [
        {
        name: 'tweet',
        title: 'Tweet',
        type: 'string',
    },
    {
        name:"timestamp",
    },
    {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'users' }],
        
    }
]

}