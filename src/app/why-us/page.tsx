import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const reasons = [
    {
        title: "Quality You Can Trust",
        description: "Every product is carefully vetted before it reaches our catalog, so you never have to second-guess what you're buying.",
    },
    {
        title: "Fast, Reliable Delivery",
        description: "We partner with trusted couriers to make sure your order arrives quickly and in perfect condition.",
    },
    {
        title: "Honest Pricing",
        description: "No hidden fees, no inflated prices. What you see is what you pay.",
    },
    {
        title: "Real Customer Support",
        description: "Our support team is made up of real people ready to help, not bots reading from a script.",
    },
];

const WhyUsPage = () => {
    return (
        <main className="px-8 py-16 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-10 text-center">Why Choose MyShop</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason) => (
                    <Card key={reason.title}>
                        <CardHeader>
                            <CardTitle>{reason.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{reason.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
};

export default WhyUsPage;