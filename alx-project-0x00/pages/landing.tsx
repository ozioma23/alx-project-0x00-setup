import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC = () => {
 return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="space-y-4 mt-4">
      <Button title="Small Rounded" size="small" shape="rounded-sm" />
      <Button title="Medium Rounded" size="medium" shape="rounded-md" />
      <Button title="Large Rounded Full" size="large" shape="rounded-lg" />
      <Button title="Custom Style" className="bg-green-500" />
    </div>
    </div>
    
  )
}
export default Landing