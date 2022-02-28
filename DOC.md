# users object pattern 
describes the users (mock) data:

```batch
{   
        username: "",
        password: "",
        _id: "0",
        mobile: "",
        role:"",
        img: "",
        join_date:"",
        list: {
            tags:[],
            upload_date:"",
            description:"",
            details:"",
            img_list:[]
        }

    },
```
* list: object -> holds the uploads of the
* img: string - user img
* tags: array - talent seeking or searching tags
* description: string - short paragraph of the talent
* details: string - details of the specific talent
* img_list: string - images list or the talent images
