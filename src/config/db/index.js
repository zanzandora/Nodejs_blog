import mongoose from 'mongoose';
const uri =
  'mongodb+srv://maiminhtu130803:K1fAp2EMayZm28RT@thelazyboy.gmjvq.mongodb.net/blog_dev?retryWrites=true&w=majority&appName=TheLazyBoy';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Kết nối MongoDB
    await mongoose.connect(uri, clientOptions);

    // Đợi kết nối hoàn tất
    const db = mongoose.connection;

    db.once('open', async () => {
      console.log('Connected to MongoDB!');

      // Gửi lệnh "ping" qua admin
      const admin = db.db.admin(); // Đảm bảo db.db tồn tại
      const pingResponse = await admin.command({ ping: 1 });
      console.log('Ping response:', pingResponse);
    });

    // Xử lý lỗi
    db.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
run().catch(console.dir);

export default { run };
