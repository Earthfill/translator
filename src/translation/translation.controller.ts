import { Controller, Get, Param } from '@nestjs/common';
import { TranslationService } from './translation.service';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get(':language/:key')
  translate(
    @Param('language') language: string,
    @Param('key') key: string,
  ): string {
    return this.translationService.getTranslation(language, key);
  }
}
