let { ChangeHandler } = require("../src/changehandler");

// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {
  it("amountDue is set based on an argument", function() {
    //Arrange
    let vendingMachine = new ChangeHandler(105);
    //Assert
    expect(vendingMachine.amountDue).toBe(105);
  });

  it("cashTendered is set to zero.", function() {
    //Arrange
    let vendingMachine = new ChangeHandler(100);
    //Assert
    expect(vendingMachine.cashTendered).toBe(0);
  });

  it("Inserting a penny increases cash tendered by 1", function() {
    // Arrange
    const vendingMachine = new ChangeHandler(105);
    //Act
    vendingMachine.insertCoin("penny");
    // Act & Assert
    expect(vendingMachine.cashTendered).toBe(1);
  });

  it("Insert a nickel", function() {
    // Arrange
    const vendingMachine = new ChangeHandler(105);
    //Act
    vendingMachine.insertCoin("nickel");
    // Act & Assert
    expect(vendingMachine.cashTendered).toBe(5);
  });

  it("Insert a dime", function() {
    // Arrange
    const vendingMachine = new ChangeHandler(105);
    //Act
    vendingMachine.insertCoin("dime");
    // Act & Assert
    expect(vendingMachine.cashTendered).toBe(10);
  });

  it("Insert a quarter", function() {
    // Arrange
    const vendingMachine = new ChangeHandler(105);
    //Act
    vendingMachine.insertCoin("quarter");
    // Act & Assert
    expect(vendingMachine.cashTendered).toBe(25);
  });

  it("Calling function multiple times continues to add on to the amount.", function() {
    // Arrange
    const vendingMachine = new ChangeHandler(105);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    // Act & Assert
    expect(vendingMachine.cashTendered).toBe(66);
  });

  it("Returns true if cashTendered more than amountDue.", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(105);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    // Act & Assert
    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });

  it("Returns false if cashTendered less than amountDue.", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(130);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    // Act & Assert
    expect(vendingMachine.isPaymentSufficient()).toBe(false);
  });

  it("Returns true if cashTendered equal to amountDue.", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(130);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");
    // Act & Assert
    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });

  it("tests to see if 32 change produces 1 quarters, 1 nickels, 2 pennies", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(100);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    //ASSERT
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });
  it("tests to see if 10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(100);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");

    //ASSERT
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
    });
  });
  it("tests to see if 27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(100);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");

    //ASSERT
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
    });
  });
  it("tests to see if 68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
    //Arrange
    const vendingMachine = new ChangeHandler(100);
    //Act
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");

    //ASSERT
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    });
  });
});
