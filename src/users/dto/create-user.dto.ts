enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export class CreateUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  role: Role = Role.USER;
  isActive: boolean;
  city: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}
export class UpdateUserDto {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  password?: string;
  isActive?: boolean;
  city?: string;
  role?: string;
  country?: string;
  zipCode?: string;
  createdAt?: Date;
  updatedAt: Date = new Date();
}
