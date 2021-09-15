import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		//mongodb+srv://Jali:mnisikamatla@cluster0.mbspu.mongodb.net/phoneBook?retryWrites=true&w=majority
		MongooseModule.forRoot("mongodb+srv://Jali:mnisikamatla@cluster0.mbspu.mongodb.net/phoneBook?retryWrites=true&w=majority", { autoCreate: true }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
