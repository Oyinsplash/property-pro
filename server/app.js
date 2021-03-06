import express from 'express';
import jsend from 'jsend';
import bodyParser from 'body-parser';
import { cloudinaryConfig } from './config/cloudinaryConfig';
import PropertyRoutes from './routes/properties';
import userRoutes from './routes/users';



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', cloudinaryConfig);                          //Cloudinary API call
app.use('/api/v1/property', PropertyRoutes);
app.use('/api/v1/auth', userRoutes);

app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Welcome to PropertyPro',
	});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`PropertyPro started on port ${port}`);
});

export default app;
