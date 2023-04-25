<div class="line">
    <div class="label">
        {!! in_array('required',$rules)?'<span class="ub-text-danger ub-text-bold">*</span>':'' !!}
        @if($tip)
            <a class="ub-text-muted" href="javascript:;" data-tip-popover="{{$tip}}"><i class="iconfont icon-warning"></i></a>
        @endif
        {{$label}}
    </div>
    <div class="field">
        <div id="{{$id}}Input" class="tw-border tw-border-gray-100 tw-border-solid tw-rounded">
            <input type="hidden" name="{{$name}}" :value="jsonValue" />
            @if($viewMode=='mini')
                <div class="tw-inline-block tw-w-32" v-for="(valueItem,valueIndex) in value">
                    <el-input placeholder="请输入内容" size="mini" v-model="value[valueIndex]">
                        <template slot="append">
                            <a href="javascript:;" class="ub-text-danger" @click="value.splice(valueIndex,1)"><i class="iconfont icon-trash"></i></a>
                        </template>
                    </el-input>
                </div>
                <a href="javascript:;" class="ub-text-muted" @click="value.push('')"><i class="iconfont icon-plus"></i> {{L('Add')}}</a>
            @else
                <table class="ub-table">
                    <body>
                    <tr v-for="(valueItem,valueIndex) in value">
                        <td>
                            <input type="text" v-model="value[valueIndex]" />
                        </td>
                        <td width="50">
                            <a href="javascript:;" class="ub-text-danger" @click="value.splice(valueIndex,1)"><i class="iconfont icon-trash"></i></a>
                        </td>
                    </tr>
                    </body>
                </table>
                <a href="javascript:;" class="ub-text-muted" @click="value.push('')"><i class="iconfont icon-plus"></i> {{L('Add')}}</a>
            @endif
        </div>
        @if(!empty($help))
            <div class="help">{!! $help !!}</div>
        @endif
    </div>
</div>
<script>
    {{ \ModStart\ModStart::js('asset/vendor/vue.js') }}
    {{ \ModStart\ModStart::js('asset/vendor/element-ui/index.js') }}
    {{ \ModStart\ModStart::css('asset/vendor/element-ui/index.css') }}
    $(function () {
        var app = new Vue({
            el: '#{{$id}}Input',
            data: {
                value: {!! json_encode($value?$value:(null===$defaultValue?[]:$defaultValue)) !!}
            },
            computed:{
                jsonValue:function(){
                    return JSON.stringify(this.value);
                }
            },
            methods:{

            }
        });
    });
</script>
