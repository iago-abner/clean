- Cliente -> Nome, documento, endereço, contato, email, senha
- Ações do cliente -> Ler saldo, transferir, depositar, sacar
- Conta -> Saldo, número da conta, agência, tipo de conta.
- Ações da conta -> Criar conta, deletar conta, atualizar conta, ler conta
- Transação -> Tipo de transação, valor, data, hora, conta de origem, conta de destino

# full

- entidade
- repository (funções que se comunicam com a infra/db)
- useCase (regras de negócio) -> (o construtor recebe o repository --- utiliza os métodos do repository)
