const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const connectToMongoDB = require('./config/db.config');
const adminRoutes = require('./routes/admin.routes');
const categoryRoutes = require('./routes/category.routes');
const blogRoutes = require('./routes/blog.routes');
const userRoutes = require('./routes/user.routes');

connectToMongoDB();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/admin', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/blog', blogRoutes);
app.use('/', userRoutes); // contains req.params => at the end

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));