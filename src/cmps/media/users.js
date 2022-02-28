/**
 * users.js is the file that holds the mocking content for debugging
 * and tracking the data flow. Next stage will be the data from server.
 * Explenation on the object keys is in main folder -> DOC.md under "users object pattern"
 */
 
import images from "./imgs"

export const users = [
    
    {   
        username: "Akiva Mendelovich",
        password: "1111",
        _id: "1",
        mobile: "051-111-1111",
        role:"talent",
        img: images[0],
        join_date:"",
        list: {
            tags:['photos', 'videos', 'camera'],
            upload_date:"01.01.2001",
            description:`Proffesional cameramen.
                         Loves to film and to photograph events or outside photos `,
            details:`I'm using modern equipment and have very good recommendations.
                    Proffesionality in night scenes and also raining day conditions.
                    I served a lot of people above 100 events last year.
                    you can check my website in here:"https://akivaPhoto.co.il/"`,
            img_list:[] 
        }

    },
    {   
        username: "Yossi Peretz",
        password: "1111",
        _id: "2",
        mobile: "051-111-1112",
        role:"talent",
        img: images[1],
        join_date:"",
        list: {
            tags:['painting', 'art', 'schema artist'],
            upload_date:"",
            description:`My main hobby is painting!`, 
            details:`People always told me I was born with paintbrashs in my hands.
                    For me, painting is my air for breathing.
                    I'm sure will have a good match! Contact Me :)`,
            img_list:[] 
        }

    },
    {   
        username: "Menachem Levi",
        password: "1111",
        _id: "3",
        mobile: "050-111-1110",
        role:"talent",
        img: images[2],
        join_date:"",
        list: {
            tags:['developing', 'fullstack', 'frontend', 'backend'],
            upload_date:"",
            description:`Full Stack developer, build Websites & E2E Application`, 
            details:`Build strong and beautiful Web Applications From scratch.
                    My oriented side is for front-end and back-end both.
                    I have a very good recommendations.
                    Today my main application is intended to help people with talent
                    but have no exposure.
                    Contact Me! I'm sure we'll have nice conversation. `,
            img_list:[] 
        }

    },
    {   
        username: "Betzalel Uri",
        password: "1111",
        _id: "4",
        mobile: "051-111-1114",
        role:"talent",
        img: images[3],
        join_date:"",
        list: {
            tags:['artist', 'designer', 'deep thoughts'],
            upload_date:"",
            description:`The beauty we can create from nature, is my life`, 
            details:`Construct complex structures with complex beautifully parts.
                     Design home-art decorations.`,
            img_list:[] 
        }

    },
    {   
        username: "Yehuda Ben-Ezra",
        password: "1111",
        _id: "5",
        mobile: "051-111-1115",
        role:"talent",
        img: images[4],
        join_date:"",
        list: {
            tags: ['fixing', 'all-in-it', 'global fixing'],
            upload_date:"",
            description:`Give me a broken glass, I'll make it diamond!`, 
            details:`Actually, I'm the one to call him when your electronic tool broke
                     or when your shelf has fallen.
                     Two good right hands.`,
            img_list:[] 
        }

    }
]
