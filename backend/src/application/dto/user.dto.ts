// INPUT DTO (Use Case recebe isso)
export interface CreateUserInput {
  name: string;
  email: string;     // Depois vira EmailVO
  password: string;  // Depois vira PasswordVO
}

// INPUT DTO para atualização
export interface UpdateUserInput {
  name?: string;
  email?: string;
  password?: string;
  active?: boolean;
}

// OUTPUT DTO (para ser retornado pelos Use Cases)
export interface UserOutputDto {
  id: string;
  name: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// LISTAGEM
export interface ListUsersOutput {
  items: UserOutputDto[];
  total: number;
}
