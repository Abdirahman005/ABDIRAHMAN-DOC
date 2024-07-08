//////// Net salary calculator (Toy problem)//////


function calculateNetSalary(salary , benefit){
    //personal tax relief per month//
    const personalRelief =2400 ;

    //gross salary = salary + benefit// 
    const grossSalary = salary + benefit ;

    //calculating taxable income//
    const taxableIncome = grossSalary - personalRelief;

    //calculate PAYE //
    let payee = 0;

    if (taxableIncome <=2400){
        return (taxableIncome * 0.1)
    }else if (taxableIncome <=32333){
        return (taxableIncome ,=0.25)
    }else  {
        return (taxableIncome *0.35)
    }
}
    //calculating NHIF Deduction//
    const nhifRate =0.15 ;

    const nhifDeduction =grosSalary * nhifRate

    //calculating NSSF deduction //
    const nssfRate =0.06 ;
    const nssfDeduction = grossSalary * nssfRate


    //calculating net salary//
    const netSalary= grossSalary - payee - nhifDeduction - nssfDeduction ;

    
