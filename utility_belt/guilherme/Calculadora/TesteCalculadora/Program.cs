char op = '+';
double resultado = 0;

Console.WriteLine("CALCULADORA");

Console.WriteLine("Digite um número e depois um operador (+, -, =): ");

while (op != '=')
{
    var n1 = double.Parse(Console.ReadLine());

    switch (op)
    {
        case '+':
            resultado += n1;
            break;
        case '-':
            resultado -= n1;
            break;
        case '*':
            resultado *= n1;
            break;
        case '/':
            resultado /= n1;
            break;
    }

    op = char.Parse(Console.ReadLine());
}

Console.WriteLine($"O resultado é {resultado}");