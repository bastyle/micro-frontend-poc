import "./assets/bootstrap/css/bootstrap.min.css";

export default function StudentForm() {
    console.log("Student App 1, Student Form.");
    return (
        <div>
            <section class="position-relative py-4 py-xl-5">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div class="card mb-5">
                                <div class="card-body p-sm-5">
                                    <h2 class="text-center mb-4">Student Info.</h2>
                                    <h6 class="text-center mb-4">(StudentApp1)</h6>
                                    <form method="post">
                                        <div class="mb-3"><input class="form-control" type="text" id="name-2" name="name" placeholder="Name" /></div>
                                        <div class="mb-3"><input class="form-control" type="email" id="email-2" name="email" placeholder="Email" /></div>
                                        <input class="form-control" type="text" name="phone" placeholder="phone number" required="" minlength="10" maxlength="10" />
                                        <div class="mb-3"></div>
                                        <div><button class="btn btn-primary d-block w-100" type="submit">Send </button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}