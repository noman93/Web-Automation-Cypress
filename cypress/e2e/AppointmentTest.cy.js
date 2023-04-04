import LoginPage from "../pages/LoginPage";
import AppointmentPage from "../pages/AppointmentPage"
describe("Make Appointment",()=>{
    const loginPage = new LoginPage();
    const appointment = new AppointmentPage();

    before(()=>{
        loginPage.userLogin("John Doe","ThisIsNotAPassword")
        cy.viewport(1920,1080);
    })

    it("User can Make an appoinment",()=>{
        // cy.scrollTo(0, -500) 
        // cy.get('body').invoke('scrollTop', 0);
    

        appointment.userINappointment()
        appointment.userBookAppointment()
        appointment.userCheckReaddmision()
        appointment.userCheckHealthProgram()
        appointment.userSelectDate()
        appointment.userComment()
        appointment.bookAppointmentBtn()
        appointment.bookingCompleteAssertion("Appointment Confirmation","Please be informed that your appointment has been booked as following:","Seoul CURA Healthcare Center","Yes","Medicaid","11/04/2023")
        
    


    })
    // it("Select Facility - Seoul CURA Healthcare Center",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()

    // })
    // it("Check on Apply for hospital readmission",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()
    //     appointment.userCheckReaddmision()

    // })
    // it("Select Healthcare Program - Medicaid",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()
    //     appointment.userCheckHealthProgram()
    //     appointment.userCheckHealthProgram()

    // })
    // it("Select a visiting date",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()
    //     appointment.userCheckHealthProgram()
    //     appointment.userCheckHealthProgram()
    //     appointment.userSelectDate()

    // })

    // it("Add a comment",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()
    //     appointment.userCheckHealthProgram()
    //     appointment.userCheckHealthProgram()
    //     appointment.userSelectDate()
    //     appointment.userComment()

    // })
    // it("Book an Appointment",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()
    //     appointment.userCheckHealthProgram()
    //     appointment.userCheckHealthProgram()
    //     appointment.userSelectDate()
    //     appointment.userComment()
    //     appointment.bookAppointmentBtn()

    // })
    // it("Verify the appointment",()=>{
    //     // cy.scrollTo(0, -500) 
    //     // cy.get('body').invoke('scrollTop', 0);
    

    //     appointment.userINappointment()
    //     appointment.userBookAppointment()
    //     appointment.userCheckHealthProgram()
    //     appointment.userCheckHealthProgram()
    //     appointment.userSelectDate()
    //     appointment.userComment()
    //     appointment.bookAppointmentBtn()
    //     appointment.bookingCompleteAssertion("Appointment Confirmation","Please be informed that your appointment has been booked as following:","Seoul CURA Healthcare Center","Yes","Medicaid","11/04/2023")
        

    // })



})