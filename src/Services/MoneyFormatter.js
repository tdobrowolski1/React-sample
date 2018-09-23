
class MoneyFormater {
    //mocking it for sample EURUSD scenario
    FormatBeginPrice(price) {
        return price.toString().substring(0,1) + "." +price.toString().substring(1,3) ;

    }
    FormatMidPrice(price){
        return price.toString().substring(3,5)
    }

    FormatEndPrice(price){
        return price.toString().substring(5,6) ;
    }

}

export default MoneyFormater;