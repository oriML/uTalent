import { users } from "../cmps/media/users";

const tags = users.reduce((prev, { list })=>
    [...prev,
        {
            category: list.tags[0],
            tags: list.tags,
        }
    ] ,[]) ;


export default tags