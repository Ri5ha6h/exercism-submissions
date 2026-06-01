class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation) {
        try{
            if(operation == "+"){
                int sum = operand1 + operand2;
                return operand1 + " + " + operand2 + " = " + sum;
            }
            else if(operation == "*"){
                int mul = operand1 * operand2;
                return operand1 + " * " + operand2 + " = " + mul;
            }
            else if(operation == "/"){
                if(operand2 == 0) throw new ArithmeticException();
                int div = operand1 / operand2;
                return operand1 + " / " + operand2 + " = " + div;
            }
            else if(operation == null){
                throw new IllegalArgumentException("Operation cannot be null");
            }
            else if(operation == ""){
                throw new IllegalArgumentException("Operation cannot be empty");
            }
            else{
                throw new IllegalOperationException("Operation '" + operation + "' does not exist");
            }
        }catch (ArithmeticException e){
            throw new IllegalOperationException("Division by zero is not allowed", e);
        }
        
    }
}
