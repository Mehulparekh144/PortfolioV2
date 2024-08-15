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
  NodejsLine,
  TrpcOriginal,
  ReduxOriginal,
  PrismaOriginal,
  SupabaseOriginal,
  FramermotionOriginal,
  HibernateOriginal,
} from "devicons-react";
import { Code } from "lucide-react";

type IconComponent = React.ComponentType<{ className?: string }>;

const skillIcons: Record<string, IconComponent | null> = {
  // Languages
  java: JavaPlain,
  javascript: JavascriptPlain,
  typescript: TypescriptPlain,
  python: PythonPlain,

  // Web Technologies
  reactjs: ReactOriginal,
  nextjs: NextjsPlain,
  expressjs: ExpressOriginal,
  springboot: SpringOriginal,
  trpc: TrpcOriginal, // No icon available
  django: DjangoPlain,
  html: Html5Plain,
  css: Css3Plain,
  nodejs : NodejsLine,
  tailwindcss: TailwindcssOriginal,
  vercel: VercelOriginal,
  kafka: ApachekafkaOriginal,
  rabbitmq: RabbitmqOriginal,
  redux : ReduxOriginal,
  prisma: PrismaOriginal,
  supabase: SupabaseOriginal,
  framer: FramermotionOriginal,


  // Database Technologies
  mongodb: MongodbPlain,
  mysql: MysqlOriginal,
  postgresql: PostgresqlPlain,
  redis: RedisPlain,
  hibernate : HibernateOriginal,

  // Cloud & DevOps
  docker: DockerPlain,
  kubernetes: KubernetesPlain,
  aws: AmazonwebservicesLineWordmark,
  terraform: TerraformPlain,

  // Testing Frameworks
  junit: JunitPlain,
  mockito: null, // No icon available
  jest: JestPlain,
  vitest: VitestPlain,

  // Libraries
  pandas: PandasPlain,
  numpy: NumpyPlain,
  sklearn: ScikitlearnOriginal,
  matplotlib: MatplotlibPlain,
  tensorflow: TensorflowOriginal,
  opencv: OpencvPlain,
  keras: KerasPlain,
  pytorch: PytorchOriginal,

  // Other Tools
  git: GitPlain,
  figma: FigmaPlain,
  jenkins: JenkinsPlain,
  vmware: null, // No icon available
  linux: LinuxPlain,
};


interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const IconComponent = skillIcons[skill] || Code; // Fallback to Code icon if none found

  return (
    <div className="flex items-center font-display  bg-zinc-900 text-white rounded-md px-3 py-1 text-sm">
      <IconComponent className="w-5 h-5 inline-block mr-2" size={"15"} />
      {skill[0].toUpperCase() + skill.slice(1)}
    </div>
  );
};

export default SkillBadge;
