# React-CalculoSalario
Aplicação utilizando react components para calcular o salário líquido a partir do salário bruto, considerando as regras da CLT de 2020.
 
# 1. Descontar o INSS do salário bruto
O INSS é descontado para que, futuramente, se torne sua aposentadoria, ou caso venha a ser demitido, servirá como base para o pagamento do seguro-desemprego.

Seu cálculo é feito pelo salário bruto multiplicado por uma porcentagem, e este valor será destinado à previdência social. A alíquota descontada depende do valor do salário:

# Tabela de contribuição de INSS 2020

Salário de contribuição |	Alíquota
* Salário mínimo: R$ 1.045,00	 - 7,5%
* De R$ 1.045,01 a R$ 2.089,60	- 9%
* De R$ 2.089,61 a R$ 3.134,40	- 12%
* De R$ 3.134,41 a R$ 6.101,06	- 14%

# 2. Descontar o imposto de renda retido na fonte
Após o desconto feito para a previdência social é possível saber quanto se deve destinar ao imposto de renda. Este imposto é retido da fonte, ou seja, é descontado diretamente pelo empregador e entregue à Receita Federal.

Para isso, existe uma tabela de IRRF (imposto de renda retido na fonte) que mostram as porcentagens de descontos para cada valor de salário bruto sem o INSS, que atualmente é a seguinte:

# Tabela de descontos ao IRRF
Base de cálculo (R$) | Alíquota (%) | Parcela dedutível (R$)
* Até 1.903,98             - 0%    - 0,00
* De 1.903,99 até 2.826,65 - 7,5%  - 142,80
* De 2.826,66 até 3.751,05 - 15%   - 354,80
* De 3.751,06 até 4.664,68 - 22,5% - 636,13
* Acima de 4.664,69        - 27,5% - 869,36

# Modo de uso
Baixar as dependências usando yarn no terminal do visual studio code ou pelo Cmder.
