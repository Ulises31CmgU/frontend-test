import UsersRepositoryInterface from "../../domain/interfaces/users.repository.interface";

export const UsersGetAllQuery = (
  repository: UsersRepositoryInterface
) => {
  return repository.getList();
};
