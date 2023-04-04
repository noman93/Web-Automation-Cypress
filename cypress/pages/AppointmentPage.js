class AppointmentPage {
    userINappointment() {
        cy.get('h2').should("have.text", "Make Appointment");
    }
    userBookAppointment() {
        cy.get('#combo_facility').select(2);
    }
    userCheckReaddmision() {
        cy.get('#chk_hospotal_readmission').check()
    }
    userCheckHealthProgram() {
        cy.get('#radio_program_medicaid').check()
    }
    userSelectDate() {
        //cy.get('#txt_visit_date').click()
        // cy.get('.input-group-addon')
        //cy.contains('Visit Date').click()
        cy.get('#txt_visit_date').type("11/04/2023")
        //cy.get('.datepicker-days .day:not(.old):not(.new):first').click()
        cy.get('.col-sm-4 > :nth-child(2)').click()


        //cy.get('#txt_comment').click() 

    }
    userComment() {
        cy.get('#txt_comment').type('This is a test appointment')
    }
    bookAppointmentBtn(){
        cy.get('#btn-book-appointment').click()
    }
    bookingCompleteAssertion(expextedText,expectedSubText,ecpectedFacility,expectedReaddmision,expectedHealthProgram,expectDate){
        cy.get('h2').should("have.text",expextedText)
        cy.get('.lead').should("have.text",expectedSubText)
        cy.get('#facility').should("have.text",ecpectedFacility)
        cy.get('#hospital_readmission').should("have.text",expectedReaddmision)
        cy.get('#program').should("have.text",expectedHealthProgram)
        cy.get('#visit_date').should("have.text",expectDate)
    }
}



export default AppointmentPage;