import { AuthLayout } from "../../components/auth/AuthLayout";
import { SignUpForm } from "../../components/auth/SignUpForm";

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}