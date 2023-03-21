import {
  Controller,
  Get,
  Route,
  Query,
} from 'tsoa'
import { waitForHumanResponse } from './humanResponse'

interface ToolsHumanResponse {
  response: string
}

@Route('tools')
export class ToolsController extends Controller {
  @Get('humanResponse')
  public async waitForHumanResponse(
    @Query() runID: string,
  ): Promise<ToolsHumanResponse> {
    const response = await waitForHumanResponse({
      runID,
    })

    return {
      response,
    }
  }
}