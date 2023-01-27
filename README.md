# Table of Contents
1. [Sobre](https://github.com/gabrielfurlan-dev/TeamOn/edit/master/README.md#sobre)
2. [Tecnologias_utilizadas](https://github.com/gabrielfurlan-dev/TeamOn/edit/master/README.md#tecnologias-utilizadas)
3. [Como executar a aplicação](https://github.com/gabrielfurlan-dev/TeamOn/edit/master/README.md#como-executar-a-aplica%C3%A7%C3%A3o)

## Sobre

TeamOn é uma plataforma para colaboradores de corporações com recursos e funcionalidades úteis tanto para os colaboradores quanto aos gestores.

 Os recursos incluem uma tela de início, bazar, planos de desenvolvimento, comunicados, agenda, tela de perfil, gerenciamento do humor da equipe, entre outros. 

 Além disso, o projeto inclui planos futuros para a plataforma, como um sistema de ponto eletrônico, um agendador de sala de reuniões, um agendador de livros da biblioteca e até uma possível expansão para ambientes escolares.

![[Home page TeamOn]](images/HomePage.png)

Todo o protótipo pode ser visto acessando o projeto no [figma](https://www.figma.com/file/b01bc5mS5rKDbuUKnWQUm7/TeamOn?node-id=409%3A1025&t=xgbi6S2OqCMLrh6a-1).
 
 ---
## Tecnologias utilizadas

**BackEnd**
- Linguagens: C# 11 (.NET 7.0.101)
- ORM: Entity Framework Core 7.0.1
- Banco de dados: Supabase (Postgres)

**Front End**
- Linguagens: TypeScript
- Build Tool: Vite
- Frameworks:
    - React
    - Tailwind CSS
    - Radix (breve)

 ---

## Como executar a aplicação?

1. Clone o projeto no github.
2. navegue até o diretório do projeto.

### Servidor (API)

1. Navegue até o seguinte diretório:
     ```PowerShell
     ...\TeamOn\Server\TeamOn.Domain.Api>
    ```
    
2. Execute o seguinte comando:
     ```PowerShell
    dotnet watch run
   ```
    
3. Copie o seguinte endereço para configurar no projeto web:
 ![Untitled 2](https://user-images.githubusercontent.com/79483921/214999882-620c4a34-18ee-47d5-a19e-4e8657643635.png)
 
### Web

1. Navegue até o seguinte diretório:
    ```PowerShell
     ...\TeamOn\Web>
    ```
    
2. execute o comando a seguir para instalar todas as dependências de pacotes externos:
     ```PowerShell
     npm install
    ```
    
3. Em seguida altere o arquivo substituindo a variável `baseUrl` no arquivo `axios.ts` com o endereço copiado da API:
    
    ![Untitled 5](https://user-images.githubusercontent.com/79483921/215000854-d0502d4f-b86b-4cfc-8688-b1852d15970e.png)

4. Agora execute o comando para iniciar a aplicação no terminal:
    ```PowerShell
     npm run dev
    ```
    
**Pronto**, agora sua aplicação está pronta para uso.
Obs: O banco de dados incial é configurado somente em memória local. Apos o termino da execução da aplicação. Os dados serão resetados.
