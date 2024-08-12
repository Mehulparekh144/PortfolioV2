import React from "react";
import {
  JavaPlain,
  JavascriptPlain,
  TypescriptPlain,
  PythonPlain,
  ReactOriginal,
  NextjsPlain,
  ExpressOriginal,
  SpringOriginal,
  DjangoPlain,
  Html5Plain,
  Css3Plain,
  TailwindcssOriginal,
  VercelOriginal,
  ApachekafkaOriginal,
  RabbitmqOriginal,
  MongodbPlain,
  MysqlOriginal,
  PostgresqlPlain,
  RedisPlain,
  DockerPlain,
  KubernetesPlain,
  AmazonwebservicesLineWordmark,
  TerraformPlain,
  JunitPlain,
  JestPlain,
  VitestPlain,
  PandasPlain,
  NumpyPlain,
  ScikitlearnOriginal,
  MatplotlibPlain,
  TensorflowOriginal,
  OpencvPlain,
  KerasPlain,
  PytorchOriginal,
  GitPlain,
  FigmaPlain,
  JenkinsPlain,
  LinuxPlain,
} from "devicons-react";
import { Code } from "lucide-react";

type IconComponent = React.ComponentType<{ className?: string }>;

const skillIcons: Record<string, IconComponent | null> = {
  // Languages
  Java: JavaPlain,
  Javascript: JavascriptPlain,
  Typescript: TypescriptPlain,
  Python: PythonPlain,

  // Web Technologies
  ReactJS: ReactOriginal,
  NextJS: NextjsPlain,
  ExpressJS: ExpressOriginal,
  SpringBoot: SpringOriginal,
  TRPC: null, // No icon available
  Django: DjangoPlain,
  HTML: Html5Plain,
  CSS: Css3Plain,
  TailwindCSS: TailwindcssOriginal,
  Vercel: VercelOriginal,
  Kafka: ApachekafkaOriginal,
  RabbitMQ: RabbitmqOriginal,

  // Database Technologies
  MongoDB: MongodbPlain,
  MySQL: MysqlOriginal,
  PostgreSQL: PostgresqlPlain,
  Redis: RedisPlain,

  // Cloud & DevOps
  Docker: DockerPlain,
  Kubernetes: KubernetesPlain,
  AWS: AmazonwebservicesLineWordmark,
  Terraform: TerraformPlain,

  // Testing Frameworks
  Junit: JunitPlain,
  Mockito: null, // No icon available
  Jest: JestPlain,
  Vitest: VitestPlain,

  // Libraries
  Pandas: PandasPlain,
  Numpy: NumpyPlain,
  Sklearn: ScikitlearnOriginal,
  Matplotlib: MatplotlibPlain,
  Tensorflow: TensorflowOriginal,
  OpenCV: OpencvPlain,
  Keras: KerasPlain,
  Pytorch: PytorchOriginal,

  // Other Tools
  Git: GitPlain,
  Figma: FigmaPlain,
  Jenkins: JenkinsPlain,
  VMWare: null, // No icon available
  Linux: LinuxPlain,
};

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const IconComponent = skillIcons[skill] || Code; // Fallback to Code icon if none found

  return (
    <div className="flex items-center font-display  bg-zinc-900 text-white rounded-md px-3 py-1 text-sm">
      <IconComponent className="w-5 h-5 inline-block mr-2" size={"15"} />
      {skill}
    </div>
  );
};

export default SkillBadge;
