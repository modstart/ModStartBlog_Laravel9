@if(empty($records))
    <div class="ub-empty">
        <div class="icon">
            <div class="iconfont icon-empty-box"></div>
        </div>
        <div class="text">
            暂无数据
        </div>
    </div>
@endif
@foreach($records as $record)
    <div class="ub-text-blog tw-border-0 tw-border-b tw-border-gray-100 tw-border-solid tw-pb-6 tw-mb-6"
         data-scroll-animate="animated fadeInUp"
    >
        <div>
            <div class="ub-text-truncate">
                @if($record['isTop'])
                    <span class="tw tw-align-top tw-bg-red-100 tw-inline-block tw-leading-6 tw-px-3 tw-rounded tw-text-lg tw-text-red-500">置顶</span>
                @endif
                <a href="{{modstart_web_url('blog/'.$record['id'])}}"
                   class="pb-keywords-highlight tw-align-top tw-inline-block tw-leading-6 tw-text-gray-800 tw-text-xl">
                    {{$record['title']}}
                </a>
            </div>
        </div>
        <div class="tw-flex tw-mt-2 tw-flex-col-reverse lg:tw-flex-row ">
            <div class="tw-flex-grow tw-overflow-hidden">
                <div class="tw-text-gray-400 tw-pt-2">
                    @if($record['_category'])
                        <i class="iconfont icon-category"></i>
                        {{$record['_category']['title']}}
                        <span>&nbsp;</span>
                    @endif
                    <i class="iconfont icon-time"></i>
                    {{\Carbon\Carbon::parse($record['postTime'])->format('Y-m-d H:i')}}
                    <span>&nbsp;</span>
                    <i class="iconfont icon-eye"></i>
                    {{$record['clickCount']?:0}}
                    <span>&nbsp;</span>
                    <i class="iconfont icon-comment"></i>
                    {{$record['commentCount']?:0}}
                    <span>&nbsp;</span>
                </div>
                @if(!empty($record['summary']))
                    <div class="tw-text-gray-400 tw-pt-2 tw-h-14 tw-leading-6 tw-overflow-hidden">
                        {{$record['summary']}}
                    </div>
                @endif
                @if(!empty($record['tag']))
                    <div class="tw-pt-2 tw-flex tw-flex-wrap pb-keywords-highlight">
                        @foreach($record['tag'] as $t)
                            <a href="{{modstart_web_url('blogs',['keywords'=>$t])}}"
                               class="tw-rounded-3xl tw-text-gray-400 tw-block tw-bg-gray-100 tw-leading-6 tw-mb-3 tw-px-2 tw-mr-2">
                                {{$t}}
                            </a>
                        @endforeach
                    </div>
                @endif
            </div>
            @if(!empty($record['_cover']))
                <div class="lg:tw-w-40 tw-w-full lg:tw-ml-4 tw-flex-shrink-0">
                    <div class="tw-overflow-hidden tw-rounded">
                        <div class="hover:tw-rotate-3 hover:tw-scale-110 tw-duration-300 tw-ease-in-out tw-rounded tw-transform ub-cover-3-2"
                             style="background-image:url({{$record['_cover']}})"></div>
                    </div>
                </div>
            @endif
        </div>
    </div>
@endforeach
