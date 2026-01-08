import SignupLeftSide from "./leftSide";
import SignupRightSide from "./rightSide";

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <SignupLeftSide />

      {/* Right Side - Form */}
      <SignupRightSide />
    </div>
  );
}
