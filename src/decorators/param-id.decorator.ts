import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamIdDecorator = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const paramsContext = context.switchToHttp().getRequest().params;
    return Number(paramsContext.id);
  },
);
