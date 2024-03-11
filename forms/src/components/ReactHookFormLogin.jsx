import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h2>Login</h2>
      <div className="control">
        <label>Email</label>
        <input {...register("email", { required: true })} />
        {errors.email && <p>Email is required.</p>}
      </div>
      <div className="control">
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p>Password is required.</p>}
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
