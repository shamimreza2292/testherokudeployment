import express from 'express';
import mongoose from 'mongoose';

// import session from 'express-session';

// import { Session, SessionOptions } from 'express-session';
// import session from 'express-session';

// import connectMongodbSession from 'connect-mongodb-session'

// const session = require('express-session');



const app = express();
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());


// const routes = require('./router/routes');
// const bodyParser = require('body-parser');


const port = process.env["PORT"] || 4000;

// const connectMongoSessionStor = connectMongodbSession(session)
// const sessionStore = new connectMongoSessionStor({
//     uri: 'mongodb+srv://max:ONU8Lh2p439Mq72e@cluster0.xxcpo.mongodb.net/myJobCarrier',
//     collection: 'sessionstore'  
// })
// const session =  SessionOptions;

// app.use(express.json());

// app.use((req:any, res:any, next:any) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   }); 

// app.use(session({
//     secret: 'cv session',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: true },
//     store: sessionStore
// }));






// app.use('/api', routes);




// ONU8Lh2p439Mq72e

//  mongoose.connect('mongodb+srv://max:ONU8Lh2p439Mq72e@cluster0.xxcpo.mongodb.net/myJobCarrier?retryWrites=true&w=majority', {
//     useNewUrlParser: true ,
//     useUnifiedTopology: true ,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(()=>{
//     app.listen(port, ()=>{

//         console.log(`server use port ${port}`);
//     });
// }).catch((err: any)=>{
//     console.log('mongodb conection error');
//     console.log(err);
// });

app.use((req: any, res: any, next: any)=>{
        res.json({message: "successfully run."})
})

app.listen(port, ()=>{
    console.log(`server use port ${port}`);
});