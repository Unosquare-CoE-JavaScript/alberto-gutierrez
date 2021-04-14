interface IHotDrink {
  consume(): void;
}
class Tea implements IHotDrink {
  consume() {
    console.log("Wtf is this.... this is not tea");
  }
}
class Coffee implements IHotDrink {
  consume() {
    console.log("Neat, this woke me up");
  }
}
interface iHotDrinkFactory {
  prepare(amount: number): IHotDrink;
}

class TeaFactory implements iHotDrinkFactory {
  prepare(amount: number = 1) {
    console.log(`prep ${amount}`);
    return new Tea();
  }
}

class CoffeeFactory implements iHotDrinkFactory {
  prepare(amount: number = 1) {
    console.log(`prep ${amount}`);
    return new Coffee();
  }
}

class HotDrinkMachine {
  makeDrink(hotDrinkFactory: iHotDrinkFactory) {
    return hotDrinkFactory.prepare(500);
  }
}
