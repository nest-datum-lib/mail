import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
} from 'typeorm';

@Entity()
export class Report {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public userId: string;

	@Column({ default: '' })
	@Index()
	public reportStatusId: string;

	@Column({ default: '' })
	@Index()
	public letterId: string;

	@Column({ default: '' })
	@Index()
	public email: string;

	@Column()
	@Index()
	public action: string;

	@Column('text')
	public content: string;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;
}
